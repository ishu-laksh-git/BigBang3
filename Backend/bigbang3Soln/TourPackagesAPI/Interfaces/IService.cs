using TourPackagesAPI.Models;

namespace TourPackagesAPI.Interfaces
{
    public interface IService
    {
        public Task<ICollection<itenary>?> GetItenaryByPackage(int id);
        public Task<ICollection<packages>?> GetPackageByDestination(string destination);
    }
}
