import React from "react";

const Projects = () => {
  return (
     <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Kanban */}
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">Kanban Board</h3>
          <p className="mt-2">
            Drag-and-drop task management app built with React.
          </p>
        </div>

        {/* Hostel */}
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">Hostel Management</h3>
          <p className="mt-2">
            Full-stack app for managing hostel data.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
