# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# filter_letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# method name: letter_finder
# input: array, letter
# output: new array containing only words that have the letter that was input
# method: select method to return a new array that contains only the values that fit a certain criteria, within the criteria for select use .include? to determine if values in array include the input letter, adding bang operator to select method makes it a mutator method so it should return the new array
# def letter_finder array, letter
#     array.select! {|array| array.include? letter}
#     p array
# end
# # letter_finder beverages_array, filter_letter_o
# letter_finder beverages_array, filter_letter_t

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
# Pseudo code:
# method name: abc_order
# input: hash of US regions (strings) including nested arrays of states in those regions
# output: new array that puts all values in alphabetical order
# process: .values to extract individual values from hash, .flatten removes nested arrays, .sort method sorts strings in an array by alphabetical order

# def abc_order array
#  p array.values.flatten.sort
# end

# above is the method I tried to create but I wasn't able to really test it because I kept receiving this error: `<main>': private method `abc_order' called for {:northwest=>["Washington", "Oregon", "Idaho"], :southwest=>["California", "Arizona", "Nevada"], :notheast=>["Maine", "New Hampshire", "Rhode Island"]}:Hash (NoMethodError)
# I tried googling it but couldn't figure out a fix because I don't know why Ruby thinks it is a private method. 
# Below is what I made in order to be able to print the expected outcome.


# p us_states.values.flatten.sort


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# initialize the three types of data that are required, within the same class create a bike_info method that uses string interpolation to print the required sentence

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster(speed)
        @current_speed += speed
    end
    def brake(speed)
        @current_speed -= speed
        unless @current_speed < 0
        else @current_speed = 0
        end
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end
trek = Bike.new('Trek')
trek.pedal_faster(10)
p trek.bike_info
trek.pedal_faster(18)
p trek.bike_info
trek.brake(5)
p trek.bike_info
trek.brake(25)
p trek.bike_info
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# create methods to raise and lower current_speed value, use unless keyword to change current_speed value to 0 if it returns a negative value