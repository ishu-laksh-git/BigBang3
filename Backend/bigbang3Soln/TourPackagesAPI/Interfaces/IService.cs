using TourPackagesAPI.Models;
using TourPackagesAPI.Models.DTO;

namespace TourPackagesAPI.Interfaces
{
    public interface IService
    {
        public Task<ICollection<itenary>?> GetItenaryByPackage(int id);
        public Task<ICollection<packages>?> GetPackageByDestination(string destination);
        public Task<packages?> UpdateAvailable(UpdateAvailableDTO availableDTO);
    }
}
