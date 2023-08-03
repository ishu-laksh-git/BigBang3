using BookingAPI.Interfaces;
using BookingAPI.Models;
using BookingAPI.Models.DTO;

namespace BookingAPI.Services
{
    public class ManageReservationService : IManageBooking
    {
        private readonly IAvailableRepo _availableRepo;
        private readonly IRepo<OtherTravellers,int> _otherTravellersRepo;
        private readonly IRepo<Reservation,int> _reservationRepo;
        public ManageReservationService(IAvailableRepo availableRepo, IRepo<OtherTravellers, int> otherTravellerRepo, IRepo<Reservation, int> reservationRepo)
        {
            _availableRepo = availableRepo;
            _reservationRepo = reservationRepo;
            _otherTravellersRepo = otherTravellerRepo;
        }
        
        public async Task<Available> GetAvailableByPackageId(int id)
        {
            try
            {
                var availableItems = await _availableRepo.GetAll();
                if (availableItems == null)
                {
                    return null;
                }

                return availableItems.FirstOrDefault(item => item.packageId == id);
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<OtherTravellers>> GetGuestsByTravellerid(int id)
        {
            try
            {
                var guests = await _otherTravellersRepo.GetAll();
                if (guests == null)
                {
                    return new List<OtherTravellers>();
                }

                return guests.Where(g => g.TravellerId == id).ToList();
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<Reservation>> GetReservationByPackageId(int id)
        {
            try
            {
                var reservations = await _reservationRepo.GetAll();
                if (reservations == null)
                {
                    return new List<Reservation>();
                }

                return reservations.Where(r => r.packageId == id).ToList();
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<Reservation>> GetReservationByTravellerId(int id)
        {
            try
            {
                var reservations = await _reservationRepo.GetAll();
                if (reservations == null)
                {
                    return new List<Reservation>();
                }

                return reservations.Where(r => r.TravellerId == id).ToList();
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        


    }
}
