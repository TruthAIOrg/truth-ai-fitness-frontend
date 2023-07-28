-- CreateTable
CREATE TABLE "tb_res_en" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "part_name" TEXT NOT NULL,
    "model_id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "tag_text" TEXT,
    "video_url" TEXT,
    "content" TEXT
);

-- CreateTable
CREATE TABLE "tb_res_zh" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "part_name" TEXT NOT NULL,
    "model_id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "tag_text" TEXT,
    "video_url" TEXT,
    "content" TEXT
);


