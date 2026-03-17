import React from 'react'

const StudentList = ({ students }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {students.map((st) => (
        <div 
          key={st.id} 
          className="border rounded-lg p-4 w-48 shadow-sm bg-white"
        >
          <h2 className="text-lg font-semibold mb-1">
            {st.name}
          </h2>
          <p className="text-sm text-gray-600">ID: {st.id}</p>
          <p className="text-sm text-gray-600">Age: {st.age}</p>
          <p className="text-sm text-gray-600">{st.course}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentList