require 'faker'

puts "🌱 Seeding Podcasts..."

10.times do
    # create a trip with random data using https://github.com/faker-ruby/faker
    Podcast.create(
        topic: Faker::Hobby.activity,
        description: Faker::Quote.famous_last_words,
        guest: Faker::Superhero.name,
        release_date: Faker::Date.between(from: 2.days.ago, to: Date.today)
    )
end

puts "✅ Done seeding Podcasts! Will now seed Podcast List..."

    List.create(
        podcast_id: 1,
        list_status: 'pending'
    )
    List.create(
        podcast_id: 2,
        list_status: 'complete'
    )
    List.create(
        podcast_id: 3,
        list_status: 'complete'
    )

    Task.create(
        podcast_id: 1,
        list_id: 1,
        to_do: 'reach out to guest',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 1,
        list_id: 1,
        to_do: 'book the event space',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 1,
        list_id: 1,
        to_do: 'send out email invite',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 1,
        list_id: 1,
        to_do: 'get contract signed',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 1,
        list_id: 1,
        to_do: 'send interview prep email to guest speaker',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 2,
        list_id: 2,
        to_do: 'reach out to guest',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 2,
        list_id: 2,
        to_do: 'book the event space',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 2,
        list_id: 2,
        to_do: 'send out email invite',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 2,
        list_id: 2,
        to_do: 'get contract signed',
        todo_status: 'incomplete'
    )

    Task.create(
        podcast_id: 2,
        list_id: 2,
        to_do: 'send interview prep email to guest speaker',
        todo_status: 'incomplete'
    )

puts "✅ Done seeding!"
