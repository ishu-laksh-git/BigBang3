using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TourPackagesAPI.Models
{
    public class itenary
    {
        [Key]
        public int itenaryItemId { get; set; }
        [ForeignKey("Id")] 
        public int packageId { get; set; }
        public packages? pack { get; set; }
        public string? day { get; set; }
        public string? activity { get; set; }
    }
}
