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

# binary gap algorithm

def bin_gap(n)
    bin = n.to_s(2)
    bin_len = bin.length
    bin_ary = bin.chars
    gap_cnt_ary = []
    bin_ary.each_with_index do |num, index|
        if num == "1"
            gap_cnt_ary << index
        end
    end
    max_gap = 0
    gap_cnt_ary.each_with_index do |n, index|
        if index > 0
            diff = (n - gap_cnt_ary[index-1]) -1
            if diff > max_gap
                max_gap = diff
            end
        end
    end
    return max_gap
end

bin_gap(324)


