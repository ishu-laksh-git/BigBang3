using System.ComponentModel.DataAnnotations;

namespace BookingAPI.Models
{
    public class OtherTravellers
    {
        [Key]
        public int OtherTravellerId { get; set; }
        public int? packageId { get; set; }
        public int? TravellerId { get; set; }
        public int? AgencyId { get; set; }
        public string? Name { get; set; }
        public int? age { get; set; }
    }
}
