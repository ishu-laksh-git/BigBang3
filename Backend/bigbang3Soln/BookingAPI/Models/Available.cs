using System.ComponentModel.DataAnnotations;

namespace BookingAPI.Models
{
    public class Available
    {
        [Key]
        public int AvailableId { get; set; }
        public int packageId { get; set; }
        public int? AgencyId { get; set; }
        public int? AvailableCount { get; set; }
    }
}
