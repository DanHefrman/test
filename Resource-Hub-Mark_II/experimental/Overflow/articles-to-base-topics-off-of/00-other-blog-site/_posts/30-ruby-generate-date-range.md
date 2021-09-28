[<img src="//1.bp.blogspot.com/-m99_zzl37V4/ULhdndEerbI/AAAAAAAAJpk/_ddENqvhXvI/s400/date-range.png" width="400" height="77" />](//1.bp.blogspot.com/-m99_zzl37V4/ULhdndEerbI/AAAAAAAAJpk/_ddENqvhXvI/s1600/date-range.png)

    This is a simple post just to demonstrate how to get all the valid dates in between two given dates. Consider the situation that you have to loop through each date between**<span style="color: #e06666;"> 2012-10-27</span>** and**<span style="color: #e06666;"> 2012-11-03</span>**. Please find below the code which I used to achieve this.

    require "active_support/time"
    #
    # Check the given date is valid or not
    # @param  dt [String] [Date]
    #
    # @return [Boolean]
    def valid_date?(dt)
      begin
        Date.parse(dt)
        true
      rescue => e
        false
      end
    end


    #
    # Compute the first and last dates according to the params.
    #
    # @param  first [String] [First date]
    # @param  last [String] [Last date]
    #
    # @return [Array] [Array include first and last date]
    def generate_date_range(first, last)
      first, last = "", first unless last
      if last.nil? || last.empty?
        last = (Time.now - 1.day).in_time_zone('Kolkata').strftime("%Y-%m-%d")
      end
      if first.empty?
        first = Time.strptime(last, "%Y-%m-%d").in_time_zone('Kolkata').beginning_of_month.strftime("%Y-%m-%d")
      end
      (first..last).select { |d|  valid_date?(d) }
    end

    p generate_date_range("2012-10-27",  "2012-11-03")

**Output :**

    ["2012-10-27", "2012-10-28", "2012-10-29", "2012-10-30", "2012-10-31", "2012-11-01", "2012-11-02", "2012-11-03"]

Hope it helped you.  
Thank you.

$
