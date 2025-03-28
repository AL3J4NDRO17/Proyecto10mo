import React from 'react'


export default function BlogBanner({ blog }) {
  return (
    <div className="publicBlogDetail-banner">
      {blog.bannerImage && (
        <img
          src={blog.bannerImage || "/placeholder.svg"}
          alt={blog.title}
          className="publicBlogDetail-banner-image"
        />
      )}
      <div className="publicBlogDetail-banner-overlay">
        <div className="publicBlogDetail-banner-content">
          <h1 className="publicBlogDetail-title">{blog.bannerTitle}</h1>

        </div>
      </div>
    </div>
  )
}
