from cachetools import TTLCache

# Simple in‑process cache: up to 1000 items, 5‑minute TTL
_cache = TTLCache(maxsize=1000, ttl=300)

def cache_get(key):
    return _cache.get(key)

def cache_set(key, value):
    _cache[key] = value

#In‑memory TTL cache for hot‑read objects.
