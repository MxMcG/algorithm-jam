
def mergesort(array)
  len = array.length
  if len < 2
    return array
  end
  mid = (len / 2).to_f
  left = array.slice(0, mid)
  right = array.slice(mid, len)
  p right
  return merge(mergesort(left), mergesort(right))
end

def merge (left, right)
  results = []
  l_len = left.length
  l_count = 0
  r_len = right.length
  r_count = 0
  if ((l_count < l_len) && (r_count < r_len))
    if (left[l_count] < right[r_count])
      results.push(left[l_count])
      l_count += 1
    else
      results.push(right[r_count])
      r_count += 1
    end
  end
  return results.concat(left.slice(l_count)).concat(right.slice(r_count))
end


p mergesort([3, 24, 5, 6, 4, 3])


