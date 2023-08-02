using TourPackagesAPI.Interfaces;
using TourPackagesAPI.Migrations;
using TourPackagesAPI.Models;

namespace TourPackagesAPI.Services
{
    public class packageService : IService
    {
        private readonly IRepo<itenary, int> _ItenaryRepo;
        private readonly IRepo<packages, int> _packagesRepo;
        public packageService(IRepo<itenary, int> ItenaryRepo, IRepo<packages, int> packagesRepo)
        {
            _ItenaryRepo = ItenaryRepo;
            _packagesRepo = packagesRepo;
        }
        public async Task<ICollection<itenary>?> GetItenaryByPackage(int id)
        {
            try
            {
                var itenaryItems = await _ItenaryRepo.GetAll();
                if (itenaryItems == null)
                {
                    return null;
                }

                return itenaryItems.Where(item => item.packageId == id).ToList();
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<packages>?> GetPackageByDestination(string destination)
        {
            try
            {
                var packagesByDestination = await _packagesRepo.GetAll();
                if (packagesByDestination == null)
                {
                    return null;
                }

                // Convert both the search term and stored destinations to lowercase for comparison
                var lowercaseDestination = destination.ToLower();

                // Use StringComparison.OrdinalIgnoreCase for case-insensitive comparison
                return packagesByDestination
                    .Where(package => package.destination?.ToLower().Trim() == lowercaseDestination)
                    .ToList();
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }
    }
}
