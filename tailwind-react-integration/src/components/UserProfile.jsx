function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 p-4-sm p-8-md max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36-md h-36-md w-24-sm h-24-sm mx-auto" />
            <h1 className="text-xl-md text-lg-sm text-blue-800 my-4" >John Doe</h1>
            <p className="text-gray-600 text-base-md text-sm" >Developer at Example Co. Loves to write code and explore new technologies.</p>
            
        </div>
        
    );
}

export default UserProfile;