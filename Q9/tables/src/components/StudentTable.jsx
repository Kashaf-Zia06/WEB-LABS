import { useState } from "react";

function StudentTable() {
  const [students, setStudents] = useState([
    { roll: 1, name: "Ali", math: 80, science: 75 },
    { roll: 2, name: "Sara", math: 90, science: 85 },
    { roll: 3, name: "Ahmed", math: 70, science: 65 },
    { roll: 4, name: "Ayesha", math: 88, science: 92 },
    { roll: 5, name: "Usman", math: 60, science: 70 },
  ]);

  // Delete function
  const handleDelete = (roll) => {
    const updatedStudents = students.filter(s => s.roll !== roll);
    setStudents(updatedStudents);
  };

  return (
    <div className="p-4">
      <table className="table-auto border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Roll</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Math</th>
            <th className="border p-2">Science</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => {
            const total = student.math + student.science;
            return (
              <tr key={student.roll} className="text-center">
                <td className="border p-2">{student.roll}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.math}</td>
                <td className="border p-2">{student.science}</td>
                <td className="border p-2">{total}</td>

                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(student.roll)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;