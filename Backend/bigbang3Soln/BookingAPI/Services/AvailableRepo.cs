using BookingAPI.Interfaces;
using BookingAPI.Models;
using BookingAPI.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace BookingAPI.Services
{
    public class AvailableRepo : IAvailableRepo
    {
        private readonly Context _context;
        public AvailableRepo(Context context)
        {
            _context = context;
        }
        public async Task<Available?> Add(Available item)
        {
            var spot = _context.Availables.SingleOrDefault(a => a.AvailableId == item.AvailableId);
            if (spot == null)
            {
                try
                {
                    _context.Availables.Add(item);
                    await _context.SaveChangesAsync();
                    return item;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }

        public async Task<Available?> Delete(int id)
        {
            try
            {
                var spot = await Get(id);
                if (spot != null)
                {
                    _context.Availables.Remove(spot);
                    await _context.SaveChangesAsync();
                    return spot;
                }
                return null;

            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<Available?> Get(int id)
        {
            try
            {
                var spot = await _context.Availables.SingleOrDefaultAsync(s => s.AvailableId == id);
                if (spot == null)
                {
                    return null;
                }
                return spot;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        public async Task<ICollection<Available>?> GetAll()
        {
            try
            {
                var spots = await _context.Availables.ToListAsync();
                if (spots != null)
                {
                    return spots;
                }
                return null;
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }



        public async Task<Available?> Update(availableDTO item)
        {
            var spot = _context.Availables.SingleOrDefault(s => s.packageId == item.packageId);
            if (spot != null)
            {
                try
                {
                    spot.AvailableCount = item.AvailableCount;
                    spot.packageId = item.packageId;
                    await _context.SaveChangesAsync();
                    return spot;
                }
                catch (Exception)
                {
                    throw new Exception();
                }
            }
            return null;
        }
    }
}
