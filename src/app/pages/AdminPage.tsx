import { useState, useEffect, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Pencil, Trash2, Plus, LogOut } from "lucide-react";

interface Review {
  id: string;
  name: string;
  text: string;
}

const API_BASE = "/.netlify/functions";

function getPassword(): string | null {
  return sessionStorage.getItem("admin-password");
}

function setPassword(pw: string): void {
  sessionStorage.setItem("admin-password", pw);
}

function clearPassword(): void {
  sessionStorage.removeItem("admin-password");
}

function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean>(
    () => getPassword() !== null
  );
  const [loginInput, setLoginInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Add form state
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [adding, setAdding] = useState(false);

  // Edit dialog state
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [editName, setEditName] = useState("");
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);

  // Delete confirmation state
  const [deletingReview, setDeletingReview] = useState<Review | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Status message
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Seed Dialog state
  const [isSeedOpen, setIsSeedOpen] = useState(false);
  const [seedJson, setSeedJson] = useState("");
  const [seeding, setSeeding] = useState(false);

  const showStatus = (type: "success" | "error", text: string) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/list-reviews`);
      if (res.ok) {
        const data: Review[] = await res.json();
        setReviews(data);
      }
    } catch {
      // keep existing reviews on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchReviews();
    }
  }, [authenticated, fetchReviews]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await fetch(`${API_BASE}/manage-reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-password": loginInput,
        },
        body: JSON.stringify({ name: "test", text: "test" }),
      });
      if (res.status === 401) {
        setLoginError("Incorrect password");
        return;
      }

      // If we get here (201 created or any non-401), the password is valid.
      // Clean up the test review we just created.
      const data = await res.json();
      if (data.id) {
        await fetch(`${API_BASE}/manage-reviews?id=${data.id}`, {
          method: "DELETE",
          headers: { "admin-password": loginInput },
        });
      }

      setPassword(loginInput);
      setAuthenticated(true);
    } catch {
      setLoginError("Network error. Please try again.");
    }
  };

  const handleLogout = () => {
    clearPassword();
    setAuthenticated(false);
    setLoginInput("");
    setLoginError("");
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    setAdding(true);
    try {
      const res = await fetch(`${API_BASE}/manage-reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-password": getPassword() || "",
        },
        body: JSON.stringify({ name: newName.trim(), text: newText.trim() }),
      });
      if (res.ok) {
        setNewName("");
        setNewText("");
        showStatus("success", "Review added");
        await fetchReviews();
      } else {
        showStatus("error", "Failed to add review");
      }
    } catch {
      showStatus("error", "Network error");
    } finally {
      setAdding(false);
    }
  };

  const openEdit = (review: Review) => {
    setEditingReview(review);
    setEditName(review.name);
    setEditText(review.text);
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim() || !editText.trim() || !editingReview) return;

    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/manage-reviews`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "admin-password": getPassword() || "",
        },
        body: JSON.stringify({
          id: editingReview.id,
          name: editName.trim(),
          text: editText.trim(),
        }),
      });
      if (res.ok) {
        setEditingReview(null);
        showStatus("success", "Review updated");
        await fetchReviews();
      } else {
        showStatus("error", "Failed to update review");
      }
    } catch {
      showStatus("error", "Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingReview) return;

    setDeleting(true);
    try {
      const res = await fetch(
        `${API_BASE}/manage-reviews?id=${deletingReview.id}`,
        {
          method: "DELETE",
          headers: { "admin-password": getPassword() || "" },
        }
      );
      if (res.ok) {
        setDeletingReview(null);
        showStatus("success", "Review deleted");
        await fetchReviews();
      } else {
        showStatus("error", "Failed to delete review");
      }
    } catch {
      showStatus("error", "Network error");
    } finally {
      setDeleting(false);
    }
  };

  // --- Login Screen ---
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f5f6]">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm"
        >
          <h1 className="text-2xl font-semibold text-[#12161D] mb-6 text-center">
            Admin Login
          </h1>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-[#12161D]">Password</span>
              <Input
                type="password"
                value={loginInput}
                onChange={(e) => {
                  setLoginInput(e.target.value);
                  setLoginError("");
                }}
                placeholder="Enter admin password"
                autoFocus
              />
            </label>
            {loginError && (
              <p className="text-red-500 text-sm">{loginError}</p>
            )}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // --- Dashboard ---
  return (
    <div className="min-h-screen bg-[#f3f5f6]">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#12161D]">
            Reviews Admin
          </h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Status message */}
        {statusMessage && (
          <div
            className={`mb-6 p-3 rounded-lg text-sm font-medium ${
              statusMessage.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Add form */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={fetchReviews}
            variant="outline"
            className="flex items-center gap-2"
          >
            Refresh Reviews
          </Button>
          <Button
            onClick={() => setIsSeedOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Seed Reviews
          </Button>
        </div>

        <form
          onSubmit={handleAdd}
          className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-[#12161D] mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Review
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Customer name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
            <Button type="submit" disabled={adding} className="w-full">
              {adding ? "Adding..." : "Add Review"}
            </Button>
          </div>
          <Textarea
            placeholder="Review text"
            className="mt-4"
            rows={3}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            required
          />
        </form>

        {/* Seed Dialog */}
        <Dialog open={isSeedOpen} onOpenChange={setIsSeedOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Seed Reviews</DialogTitle>
              <DialogDescription>
                Paste the JSON array of reviews to seed:
              </DialogDescription>
            </DialogHeader>
            <Textarea
              value={seedJson}
              onChange={(e) => setSeedJson(e.target.value)}
              placeholder='[{"name": "...", "text": "..."}]'
              rows={10}
            />
            <DialogFooter>
              <Button
                disabled={seeding}
                onClick={async () => {
                  setSeeding(true);
                  try {
                    // Note: This logic assumes your seed endpoint accepts json body
                    const res = await fetch(`${API_BASE}/seed-reviews`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: seedJson,
                    });
                    if (res.ok) {
                      showStatus("success", "Reviews seeded successfully");
                      await fetchReviews();
                      setIsSeedOpen(false);
                      setSeedJson("");
                    } else {
                      showStatus("error", "Failed to seed reviews");
                    }
                  } catch {
                    showStatus("error", "Network error while seeding");
                  } finally {
                    setSeeding(false);
                  }
                }}
              >
                {seeding ? "Seeding..." : "Submit"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Reviews table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              Loading reviews...
            </div>
          ) : reviews.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No reviews yet. Add one above.
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left px-5 py-3 text-sm font-medium text-gray-600">
                    Name
                  </th>
                  <th className="text-left px-5 py-3 text-sm font-medium text-gray-600">
                    Review
                  </th>
                  <th className="text-right px-5 py-3 text-sm font-medium text-gray-600 w-28">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="px-5 py-3 text-[#12161D] font-medium whitespace-nowrap">
                      {review.name}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">
                      {review.text.length > 120
                        ? review.text.slice(0, 120) + "..."
                        : review.text}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEdit(review)}
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeletingReview(review)}
                          title="Delete"
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog
          open={editingReview !== null}
          onOpenChange={(open) => {
            if (!open) setEditingReview(null);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Review</DialogTitle>
              <DialogDescription>
                Modify the review details below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEdit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-[#12161D]">Name</span>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-[#12161D]">Review</span>
                <Textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={4}
                  required
                />
              </label>
              <DialogFooter>
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deletingReview !== null}
          onOpenChange={(open) => {
            if (!open) setDeletingReview(null);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Review</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this review from{" "}
                <strong>{deletingReview?.name}</strong>? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeletingReview(null)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

export default AdminPage;