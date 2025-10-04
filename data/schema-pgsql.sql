-- =====================================
-- Table: utilisateurs
-- =====================================
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'editor', 'contributor', 'visitor')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- Table: Blog
-- =====================================
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    author_id INT REFERENCES users(id) ON DELETE SET NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE blog_post_tags (
    post_id INT REFERENCES blog_posts(id) ON DELETE CASCADE,
    tag_id INT REFERENCES blog_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

-- =====================================
-- Table: Constitution
-- =====================================
CREATE TABLE constitution_sections (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    parent_id INT REFERENCES constitution_sections(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE constitution_keywords (
    id SERIAL PRIMARY KEY,
    keyword VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE section_keywords (
    section_id INT REFERENCES constitution_sections(id) ON DELETE CASCADE,
    keyword_id INT REFERENCES constitution_keywords(id) ON DELETE CASCADE,
    PRIMARY KEY (section_id, keyword_id)
);

-- =====================================
-- Table: Recherche globale
-- =====================================
-- Création d'une vue matérialisée pour recherche full-text
CREATE MATERIALIZED VIEW search_index AS
SELECT id, title, content, 'blog' AS type FROM blog_posts
UNION ALL
SELECT id, title, content, 'constitution' AS type FROM constitution_sections;

-- Index full-text pour la recherche
CREATE INDEX idx_search_index_fulltext ON search_index USING gin(to_tsvector('french', title || ' ' || content));

-- =====================================
-- Table: Audit et logs
-- =====================================
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(20) NOT NULL CHECK (action IN ('CREATE', 'UPDATE', 'DELETE')),
    table_name VARCHAR(50) NOT NULL,
    record_id INT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details JSONB
);

-- =====================================
-- Extensions possibles
-- =====================================
-- Commentaires pour le blog
CREATE TABLE blog_comments (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES blog_posts(id) ON DELETE CASCADE,
    author_id INT REFERENCES users(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Versioning des sections de constitution
CREATE TABLE constitution_versions (
    id SERIAL PRIMARY KEY,
    section_id INT REFERENCES constitution_sections(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    version_number INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fichiers attachés (PDF, images, etc.)
CREATE TABLE attachments (
    id SERIAL PRIMARY KEY,
    section_id INT REFERENCES constitution_sections(id) ON DELETE CASCADE,
    post_id INT REFERENCES blog_posts(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    file_type VARCHAR(50),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
