Role::MAPPING.each do |id, name|
  Role.find_or_create_by(id: id, name: name)
end

/School Volunteer Listed Below/
CSMBVolunteer = Organization.find_or_create_by!(name: 'CSMB') do |org|
  org.description = 'CSMB Volunteering.'
  org.location    = '1547 S Theresa Ave, St. Louis, MO 63104'
  org.website     = 'https://github.com/joeTheK/WWTVolunteerApp'
end

/School Tutoring Listed Below/
school = Organization.find_or_create_by!(name: 'Collegiate School of Medicine and Bioscience') do |org|
  org.description = 'CSMB Tutoring.'
  org.location    = '1547 S Theresa Ave, St. Louis, MO 63104'
  org.website     = 'http://www.slps.org/csmb'
end

/Event Types Listed Below/
[
  'New Hire', 'Tutoring', 'Meal Service', 'Mock Interviews', 'Sorting Clothes',
  'Event Assistance', 'Bingo', 'Cleaning/Organizing', 'Street Cleaning',
  'Kitchen Prep', 'Harm Reduction Kit Assembly', 'Gardening'
].each { |et| EventType.find_or_create_by(title: et) }

stl = Office.find_or_create_by!(name: 'St. Louis') do |office|
  office.timezone = 'America/Chicago'
end

user1 = User.find_or_create_by!(email: 'ybekirov@csmb-stl.org') do |u|
  u.first_name   = 'Yunus'
  u.last_name    = 'Bekirov'
  u.office       = stl
  u.google_token = 'barty_token'
end

/
user2 = User.find_or_create_by!(email: 'agent2@example.com') do |u|
  u.first_name   = 'Angela'
  u.last_name    = 'Agent'
  u.office       = stl
  u.google_token = 'angelic_token'
end

user3 = User.find_or_create_by!(email: 'buckybadger@example.com') do |u|
  u.first_name   = 'Bucky'
  u.last_name    = 'Badger'
  u.office       = madison
  u.google_token = "bucky_token"
end
/

event1 = CSMBVolunteer.events.create!(
  title: 'CSMB-WorldWideTechnology',
  description: 'A world wide technology project.',
  starts_at: (Time.zone.now + 1.hour),
  ends_at: (Time.zone.now + 12.hours),
  capacity: 600,
  type: EventType.find_by(title: 'New Hire'),
  location: 'World Wide Technologies, Inc.',
  office: stl
)

event2 = school.events.create!(
  title: 'CSMB-Tutoring',
  description: 'Tutoring students',
  starts_at: (Time.zone.now + 1.day),
  ends_at: (Time.zone.now + 1.day + 2.hours),
  capacity: 600,
  type: EventType.find_by(title: 'New Hire'),
  location: 'University of Wisconsin-Madison',
  office: stl
)

event1.users << user1

/ Disabled for now /
/
event1.users << user2
event2.users << user3
/

if %w[development test].include?(Rails.env)
  User.find_or_create_by!(email: 'ybekirov@csmb-stl.org') do |u|
    u.first_name            = 'Yunus'
    u.last_name             = 'Bekirov'
    u.office                = stl
    u.role                  = Role.find_by(name: 'admin')
  end

  User.find_or_create_by!(email: 'stuco@csmb-stl.org') do |u|
    u.first_name            = 'Student'
    u.last_name             = 'Council'
    u.last_name             = 'Volunteer'
    u.office                = stl
  end
end
