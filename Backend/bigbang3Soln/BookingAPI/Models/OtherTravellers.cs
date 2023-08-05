using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingAPI.Models
{
    public class OtherTravellers
    {
        [Key]
        public int OtherTravellerId { get; set; }
        public int? packageId { get; set; }
        [ForeignKey("id")]
        public string? travellerEmail { get; set; }
        public Reservation? reservation { get; set; }
        public string? Name { get; set; }
        public int? age { get; set; }
    }
}
