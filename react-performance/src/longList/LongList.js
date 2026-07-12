import { users } from "../util";


export function LongList() {
  return (
    <>
      <h2>Long List</h2>
      <div
        style={{
          height: "600px",
          overflow: "auto",
          border: "1px solid #ddd",
        }}
      >
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>
                Address: {user.address.address}, {user.address.city},{" "}
                {user.address.state}
              </p>
              <p>Age: {user.age}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
