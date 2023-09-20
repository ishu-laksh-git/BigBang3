using ImagesAPI.Interfaces;
using ImagesAPI.Models;

namespace ImagesAPI.Services
{
    public class TourImageRepo : IRepo<int, Images>
    {
        private readonly Context _context;
        public TourImageRepo(Context context)
        {
            _context = context;
        }
        public async Task<Images?> Add(Images item)
        {
            _context.TourImages.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public Task<Images?> Delete(Images item)
        {
            throw new NotImplementedException();
        }

        public Task<Images?> Get(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Images>?> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Images?> Update(Images item)
        {
            throw new NotImplementedException();
        }
    }
}
