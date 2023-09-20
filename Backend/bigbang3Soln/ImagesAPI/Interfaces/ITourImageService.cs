using ImagesAPI.Models;

namespace ImagesAPI.Interfaces
{
    public interface ITourImageService
    {
        public Task<Images> AddTourImage(int packageId, IFormFile image, string name);
        public Task<ICollection<Images>> GetTourImages();
        public Task<Images> GetImage(int id);
    }
}
