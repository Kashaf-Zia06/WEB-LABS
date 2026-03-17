

import ProductCard from '../components/ProductCard'
// import watch from './assets/watch.jpg'
// import mobile from './assets/mobile.png'

import './App.css'
import StudentList from '../components/StudentList';

function App() {




  const students = [
  { id: 1, name: "Ali Khan", age: 20, course: "Computer Science", marks: 85 },
  { id: 2, name: "Sara Ahmed", age: 21, course: "Software Engineering", marks: 90 },
  { id: 3, name: "Usman Tariq", age: 19, course: "Information Technology", marks: 78 },
  { id: 4, name: "Ayesha Malik", age: 22, course: "Data Science", marks: 88 },
  { id: 5, name: "Hassan Raza", age: 20, course: "Cyber Security", marks: 82 }
];
  return (
    <>

      {/* <div className='flex flex-col -mb-5 gap-4 justify-center align-middle m-auto min-h-screen items-center'>
        <h3 className="text-4xl text-black text-center mt-6">
          PRODUCTS
        </h3>
        <div className='flex gap-6'>
          <ProductCard name="Watch" price="1000" imageSrc={watch} />
          <ProductCard name="Mobile" price="50000" imageSrc={mobile} />
        </div>
      </div> */}

      <div>
        <h2 className='text-3xl text-center text-white text-bold mt-3'>STUDENTS LIST</h2>
       <StudentList students={students}/>
      </div>

    </>
  )
}

export default App
