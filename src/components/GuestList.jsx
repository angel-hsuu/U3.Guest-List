import GuestListItem from "./GuestListItem";

export default function GuestList({ guests, onSelectGuest }) {
  return (
    <div className="guest-container">
      <h2>Guest List</h2>
      <div className="guest-header">
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
      </div>


      {guests.map((guest) => (
        <GuestListItem
          key={guest.id}
          guest={guest}
          onSelectGuest={onSelectGuest}
        />
      ))}

      <p className="instructions">Select a guest to see more details.</p>
    </div>
  );
}
