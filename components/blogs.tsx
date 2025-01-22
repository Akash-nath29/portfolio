"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

type Blog = {
  id: number;
  created_at: string;
  title: string;
  content: string;
};

export function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      } else {
        setBlogs(data || []);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="py-24 bg-black/50 md:px-52">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12">Blogs</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/viewpost/${blog.id}`}>
                  <Card className="bg-white/5 border-white/10 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {blog.title}
                        <ExternalLink className="w-5 h-5 text-purple-500" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-gray-400">{blog.content.slice(0, 100)}...</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
