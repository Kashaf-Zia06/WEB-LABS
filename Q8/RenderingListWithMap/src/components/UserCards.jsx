import human from '../assets/human.png'
import girl from '../assets/girl.jpeg'

const users = [
    { id: 1, name: "Ali", role: "Frontend Developer", avatar: human },
    { id: 2, name: "Sara", role: "Backend Developer", avatar: girl },
    { id: 3, name: "Ahmed", role: "UI Designer", avatar: human },
    { id: 4, name: "Ayesha", role: "QA Engineer", avatar: girl },
    { id: 5, name: "Usman", role: "DevOps Engineer", avatar: human },
    { id: 6, name: "Hina", role: "Project Manager", avatar: girl },
];

function UserCards() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {users.map(user => (
                <div key={user.id} className="border rounded p-4 text-center shadow">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="mx-auto rounded-full mb-2"
                    />
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <p className="text-gray-500">{user.role}</p>
                </div>
            ))}
        </div>
    );
}

export default UserCards;