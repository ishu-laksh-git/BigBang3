using BookingAPI.Models;
using BookingAPI.Models.DTO;

namespace BookingAPI.Interfaces
{
    public interface IManageBooking
    { 
        public Task<ICollection<Reservation>> GetReservationByPackageId(int id);
        public Task<ICollection<Reservation>> GetReservationByTravellerId(int id);
        public Task<ICollection<OtherTravellers>> GetGuestsByTravellerid(int id);
        public Task<Available> GetAvailableByPackageId(int id);
    }
}
