using BookingAPI.Interfaces;
using BookingAPI.Models;

namespace BookingAPI.Services
{
    public class ManageReservationService : IManageBooking
    {
        private readonly IRepo<Available,int> _availableRepo;
        private readonly IRepo<OtherTravellers,int> _otherTravellersRepo;
        private readonly IRepo<Reservation,int> _reservationRepo;
        public ManageReservationService(IRepo<Available, int> availableRepo, IRepo<OtherTravellers, int> otherTravellerRepo, IRepo<Reservation, int> reservationRepo)
        {
            _availableRepo = availableRepo;
            _reservationRepo = reservationRepo;
            _otherTravellersRepo = otherTravellerRepo;
        }
        public async Task<Reservation?> AddReservation(Reservation reservation,int Count)
        {
            try
            {
                if (reservation.Type == "Private" || reservation.Type == "private")
                {
                    var res = await _reservationRepo.Add(reservation);
                    if (res == null)
                        return null;
                    return res;
                }
                if (Count != 0) {
                    var tCount = reservation.TravellerCount;
                    var id = reservation.packageId;
                    Count = Count - tCount;
                    if (Count >= 0)
                    {
                        var updated_availability = await UpdateCount(id,Count);
                        var res = await _reservationRepo.Add(reservation);
                        if(res == null) return null;
                        return res;
                    }
                    return null;
                    
                }
                return null;
            }
            catch(Exception) {
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

        public async Task<Available> UpdateCount(int id,int count)
        {
            try
            {
                var available = await _availableRepo.Get(id);
                if (available == null)
                {
                    throw new InvalidOperationException("Available entry not found.");
                }

                available.AvailableCount = count;
                var updatedAvailable = await _availableRepo.Update(available);

                return updatedAvailable;
            }
            catch (Exception)
            {
                throw new Exception("Failed to update available count.");
            }
        }
    }
}
