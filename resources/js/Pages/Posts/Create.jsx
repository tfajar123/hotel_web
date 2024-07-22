import React, { useState } from "react";

import Layout from "../../Layouts/Default";

import { Inertia } from "@inertiajs/inertia";

export default function CreatePost({ errors }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const storePost = async (e) => {
        e.preventDefault();
        Inertia.post("/posts", { 
            title: title, 
            content: content
        });
    };

    return (
        <Layout>
            <div style={{ marginTop: "100px" }}>
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <form onSubmit={storePost}>
                            <div className="form-group mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="content" className="form-label">
                                    Content
                                </label>
                                <textarea
                                    id="content"
                                    className="form-control"
                                    rows="5"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}