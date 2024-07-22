import React from "react";
import Layout from "../../Layouts/Navbar";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function PostIndex({ posts, session }) {
    const deletePost = async (id) => {
        if (confirm("Are you sure?")) {
            Inertia.delete(`/posts/${id}`);
        }
    }
    return (
        <Layout>
            <div style={{ marginTop: "100px" }}>
                <Link href="/posts/create" className="btn btn-success btn-md mb-3">Tambah Post</Link>
                {session.success && (
                    <div className="alert alert-success">
                        {session.success}
                    </div>
                )}

                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.title}</td>
                                        <td>{post.content}</td>
                                        <td className="text-center">
                                            {/* <Link href={`/posts/${post.id}`} className="btn btn-info btn-sm">View</Link> */}
                                            <Link href={`/posts/${post.id}/edit`} className="btn btn-primary btn-sm">Edit</Link>
                                            <button onClick={() => deletePost(post.id)} className="btn btn-danger btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}