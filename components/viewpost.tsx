"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For fetching query params
import { supabase } from "@/utils/supabaseClient";

type Blog = {
    id: number;
    created_at: string;
    title: string;
    content: string;
};

export default function ViewPost() {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;

        async function fetchBlog() {
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .eq("id", id)
                .single(); // Fetch a single blog

            if (error) {
                console.error("Error fetching blog:", error);
                setError("Failed to load the blog. Please try again later.");
            } else {
                setBlog(data);
            }
        }

        fetchBlog();
    }, [id]);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!blog) {
        return <p>Loading...</p>;
    }

    return (
        <section className="py-24 bg-black/50 md:px-52">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
                <p className="text-sm text-gray-500 mb-6">
                    Published on {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <article className="text-gray-300">{blog.content}</article>
            </div>
        </section>
    );
}
