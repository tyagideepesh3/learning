import { List, useDynamicRowHeight } from "react-window";
import { users } from "../util";

function Row({ index, style, users }) {
  // console.log(users, index);
  const user = users[index];
  return (
    <div key={user.id} style={style}>
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
}
// console.log(users);

export function VirtualListComponent() {
    const rowHeight = useDynamicRowHeight({defaultRowHeight: 180})
  return (
    <>
      <h2>Virtual Lists</h2>

      <List
        rowComponent={Row}
        rowHeight={rowHeight}
        rowCount={users.length}
        style={{ height: 600 }}
        rowProps={{ users }}
      />
    </>
  );
}
