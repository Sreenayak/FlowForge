"use client";

import { useMemo, useRef, useState } from "react";

type FileType = "Document" | "Image" | "Spreadsheet" | "PDF";

type ProjectFile = {
  id: number;
  name: string;
  type: FileType;
  size: string;
  updated: string;
  owner: string;
};

const initialFiles: ProjectFile[] = [
  {
    id: 1,
    name: "Website Requirements.pdf",
    type: "PDF",
    size: "2.4 MB",
    updated: "Today",
    owner: "BK",
  },
  {
    id: 2,
    name: "Homepage Design.fig",
    type: "Document",
    size: "8.7 MB",
    updated: "Yesterday",
    owner: "AK",
  },
  {
    id: 3,
    name: "Project Timeline.xlsx",
    type: "Spreadsheet",
    size: "1.2 MB",
    updated: "Aug 10",
    owner: "RM",
  },
  {
    id: 4,
    name: "Dashboard Preview.png",
    type: "Image",
    size: "3.8 MB",
    updated: "Aug 09",
    owner: "SK",
  },
  {
    id: 5,
    name: "API Documentation.pdf",
    type: "PDF",
    size: "4.1 MB",
    updated: "Aug 08",
    owner: "BK",
  },
  {
    id: 6,
    name: "Content Plan.docx",
    type: "Document",
    size: "860 KB",
    updated: "Aug 07",
    owner: "JD",
  },
];

export default function FilesPage() {
  const [files, setFiles] = useState<ProjectFile[]>(initialFiles);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | FileType>("All");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      const matchesFilter =
        filter === "All" || file.type === filter;

      const matchesSearch = file.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [files, search, filter]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getFileType = (fileName: string): FileType => {
    const extension = fileName
      .split(".")
      .pop()
      ?.toLowerCase();

    if (
      extension === "png" ||
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "webp"
    ) {
      return "Image";
    }

    if (
      extension === "xls" ||
      extension === "xlsx" ||
      extension === "csv"
    ) {
      return "Spreadsheet";
    }

    if (extension === "pdf") {
      return "PDF";
    }

    return "Document";
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const newFile: ProjectFile = {
      id: Date.now(),
      name: selectedFile.name,
      type: getFileType(selectedFile.name),
      size:
        selectedFile.size > 1024 * 1024
          ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`
          : `${Math.max(
              1,
              Math.round(selectedFile.size / 1024)
            )} KB`,
      updated: "Just now",
      owner: "BK",
    };

    setFiles((current) => [newFile, ...current]);

    event.target.value = "";
  };

  const handleDelete = (id: number) => {
    setFiles((current) =>
      current.filter((file) => file.id !== id)
    );
  };

  const getFileIcon = (type: FileType) => {
    if (type === "PDF") {
      return "PDF";
    }

    if (type === "Image") {
      return "IMG";
    }

    if (type === "Spreadsheet") {
      return "XLS";
    }

    return "DOC";
  };

  const getIconClasses = (type: FileType) => {
    if (type === "PDF") {
      return "bg-red-50 text-red-600";
    }

    if (type === "Image") {
      return "bg-purple-50 text-purple-600";
    }

    if (type === "Spreadsheet") {
      return "bg-green-50 text-green-600";
    }

    return "bg-blue-50 text-blue-600";
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex min-h-[92px] max-w-[1500px] items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-lg font-bold text-white">
              F
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
                Workspace
              </p>

              <h1 className="text-2xl font-bold">
                Files
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/dashboard"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Overview
            </a>

            <a
              href="/projects/demo"
              className="text-sm font-medium text-gray-500 hover:text-gray-950"
            >
              Project
            </a>

            <button
              onClick={handleUploadClick}
              className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + Upload file
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
              BK
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-[1500px] px-8 py-10">
        {/* Intro */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Acme Product Team
          </p>

          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight">
                Files
              </h2>

              <p className="mt-3 max-w-2xl text-lg text-gray-500">
                Store, organize, and access important files
                across the Website Redesign project.
              </p>
            </div>

            <button
              onClick={handleUploadClick}
              className="rounded-xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              + Upload file
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Total files
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {files.length}
              </p>

              <p className="text-sm text-gray-400">
                Across project
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Documents
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {
                  files.filter(
                    (file) => file.type === "Document"
                  ).length
                }
              </p>

              <p className="text-sm text-blue-600">
                Files
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              Images
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {
                  files.filter(
                    (file) => file.type === "Image"
                  ).length
                }
              </p>

              <p className="text-sm text-purple-600">
                Visuals
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <p className="text-sm text-gray-500">
              PDFs
            </p>

            <div className="mt-5 flex items-end justify-between">
              <p className="text-4xl font-bold">
                {
                  files.filter(
                    (file) => file.type === "PDF"
                  ).length
                }
              </p>

              <p className="text-sm text-red-600">
                Documents
              </p>
            </div>
          </div>
        </section>

        {/* Files panel */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Toolbar */}
          <div className="flex flex-col gap-5 border-b border-gray-200 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-xl">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search files..."
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  "All",
                  "Document",
                  "Image",
                  "Spreadsheet",
                  "PDF",
                ] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    filter === item
                      ? "bg-gray-950 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Table header */}
          <div className="hidden grid-cols-[minmax(300px,2fr)_150px_150px_100px_100px] gap-6 border-b border-gray-200 bg-gray-50 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 md:grid">
            <span>Name</span>
            <span>Type</span>
            <span>Updated</span>
            <span>Owner</span>
            <span className="text-right">Action</span>
          </div>

          {/* File rows */}
          <div>
            {filteredFiles.length === 0 ? (
              <div className="px-7 py-20 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-xl">
                  📁
                </div>

                <p className="mt-5 text-lg font-semibold">
                  No files found
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search or upload a new file.
                </p>
              </div>
            ) : (
              filteredFiles.map((file, index) => (
                <div
                  key={file.id}
                  className={`grid gap-4 px-7 py-5 md:grid-cols-[minmax(300px,2fr)_150px_150px_100px_100px] md:items-center md:gap-6 ${
                    index !== filteredFiles.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Name */}
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold ${getIconClasses(
                        file.type
                      )}`}
                    >
                      {getFileIcon(file.type)}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {file.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {file.size}
                      </p>
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <span className="text-sm text-gray-500">
                      {file.type}
                    </span>
                  </div>

                  {/* Updated */}
                  <div>
                    <span className="text-sm text-gray-500">
                      {file.updated}
                    </span>
                  </div>

                  {/* Owner */}
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-xs font-bold text-white">
                      {file.owner}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex justify-start md:justify-end">
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}