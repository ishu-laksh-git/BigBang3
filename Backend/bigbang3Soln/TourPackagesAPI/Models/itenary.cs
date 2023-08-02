using System.ComponentModel.DataAnnotations;

namespace TourPackagesAPI.Models
{
    public class itenary
    {
        [Key]
        public int itenaryItemId { get; set; }
        public int packageId { get; set; }
        public string? day { get; set; }
        public string? activity { get; set; }
    }
}
