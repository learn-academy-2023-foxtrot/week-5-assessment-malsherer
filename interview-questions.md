# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: MS

1. Why would super be used in a Ruby class?

Your answer: Super is used in Ruby classes to pass information from a class to its subclass. The data to be passed from the superclass to the subclass is added to the initialize() method of the subclass. Super() is called to bring that data from the superclass. Ex. for a class called SoccerPlayer with the initialized (not sure if I'm using that word right) values name and club I can create a subclass of Defender and call the name value from a using super, and add a new value called position for only the subclass:
```rb
class Defender < SoccerPlayer
    def initialized(name, position)
        super(name)
        @position = position
    end
```

Researched answer: Super works by sending a message to the super class looking got the data passed into initialize(). The subclass uses the superclasses initialize method in order to assign the instance variable of name to the subclass. Instance variables are not inherited. Instead, the super method allows the subclass to borrow that instance variable from the superclass.

2. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are tables that store informations. One database can have many tables that can relate to each other. For example, we can create a database of soccer players containing some data in columns, and then create a database of season stats for each person including columns like appearances, goals scored, and assists. Each season belongs to a player, and each player has many seasons.

Researched answer: The description of the layout and relationships of all tables in a database is called the schema.

3. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys are unique identifiers for each row of a database. The primary key is always unique so even if two roaws contain the same data they can be differentiated by their primary key.

Researched answer: In Rails the primary key is called id and it is always a unique integer.

4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
The 5 verbs are:
POST - Create
GET - Read
PUT - Update
PATCH - Update
DELETE - Delete

Researched answer: PUT and PATCH are both used to update, but PUT replaces information and PATCH makes changes when it is not necessary to change all the information.

5. STRETCH: What is a JOIN table in SQL?

Your answer: ???

Researched answer: JOIN is used in SQL to join columns from multiple tables to create a new table.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Validators are used to ensure that only valid data is passed into a database. They can be customized to make sure the data follows certain parameters.

2. Params: Params are used to define the type of data that is passed into the database. They can be store in a hash.

3. API: API stands for Application Programming Interface. An API can communicate with the external side of other applications.
