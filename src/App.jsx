import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetail from "./components/GuestDetail";
import useQuery from "./useQuery"; 


export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const {
    data: guests,
    loading: loadingGuests,
    error: guestsError,
  } = useQuery("/guests");

  const {
    data: selectedGuest,
    loading: loadingDetail,
    error: detailError,
  } = useQuery(selectedGuestId ? `/guests/${selectedGuestId}` : null);

  if (loadingGuests || (selectedGuestId && loadingDetail)) return <p>Loading...</p>;
  if (guestsError || detailError) return <p>{guestsError || detailError}</p>;

return (
  <>
    <h1>Guest List</h1>
    {!guests ? (
      <p>No guests loaded.</p> 
    ) : selectedGuestId && selectedGuest ? (
      <GuestDetail guest={selectedGuest} onBack={() => setSelectedGuestId(null)} />
    ) : (
      <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
    )}
  </>
);
}