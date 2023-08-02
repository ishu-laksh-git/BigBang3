using System.ComponentModel.DataAnnotations;

namespace BookingAPI.Models
{
    public class Reservation
    {
        [Key]
        public int ReservationId { get; set; }
        public int packageId { get; set; }
        public int? AgencyId { get; set; }
        public string? Type { get; set; }
        public int? TravellerId { get; set; }
        public int TravellerCount { get; set; }
        public string? PickUp { get; set; }
        public string? Drop { get; set; }
        public int? Price { get; set; }
        public int? TotalPrice { get; set; }

    }
}
