using BookingAPI.Models;

namespace BookingAPI.Interfaces
{
    public interface IManageBooking
    { 
        public Task<Reservation?> AddReservation(Reservation reservation,int Count);
        public Task<ICollection<Reservation>> GetReservationByPackageId(int id);
        public Task<ICollection<Reservation>> GetReservationByTravellerId(int id);
        public Task<Available> UpdateCount(int id,int count);
        public Task<ICollection<OtherTravellers>> GetGuestsByTravellerid(int id);
    }
}
