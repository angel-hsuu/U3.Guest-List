export default function GuestListItem({ guest, onSelectGuest }) {
  return (
    <div className="guest-row" onClick={() => onSelectGuest(guest.id)}>
      <p>{guest.name}</p>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
    </div>
  );
}
