require 'rails_helper'

RSpec.describe "venues/new", type: :view do
  before(:each) do
    assign(:venue, Venue.new(
      :facebook_id => 1,
      :category => "MyString",
      :name => "MyString",
      :image => "MyString",
      :website_url => "MyString",
      :address_one => "MyString",
      :address_two => "MyString",
      :city => "MyString",
      :state => "MyString",
      :zip => 1,
      :phone_number => 1,
      :short_description => "MyText",
      :long_description => "MyText",
      :facebook => "MyText",
      :twitter => "MyText",
      :birthday_party_venue => false,
      :birthday_party_description => "MyText",
      :birthday_party_website_url => "MyString",
      :birthday_party_phone => 1
    ))
  end

  it "renders new venue form" do
    render

    assert_select "form[action=?][method=?]", venues_path, "post" do

      assert_select "input#venue_facebook_id[name=?]", "venue[facebook_id]"

      assert_select "input#venue_category[name=?]", "venue[category]"

      assert_select "input#venue_name[name=?]", "venue[name]"

      assert_select "input#venue_image[name=?]", "venue[image]"

      assert_select "input#venue_website_url[name=?]", "venue[website_url]"

      assert_select "input#venue_address_one[name=?]", "venue[address_one]"

      assert_select "input#venue_address_two[name=?]", "venue[address_two]"

      assert_select "input#venue_city[name=?]", "venue[city]"

      assert_select "input#venue_state[name=?]", "venue[state]"

      assert_select "input#venue_zip[name=?]", "venue[zip]"

      assert_select "input#venue_phone_number[name=?]", "venue[phone_number]"

      assert_select "textarea#venue_short_description[name=?]", "venue[short_description]"

      assert_select "textarea#venue_long_description[name=?]", "venue[long_description]"

      assert_select "textarea#venue_facebook[name=?]", "venue[facebook]"

      assert_select "textarea#venue_twitter[name=?]", "venue[twitter]"

      assert_select "input#venue_birthday_party_venue[name=?]", "venue[birthday_party_venue]"

      assert_select "textarea#venue_birthday_party_description[name=?]", "venue[birthday_party_description]"

      assert_select "input#venue_birthday_party_website_url[name=?]", "venue[birthday_party_website_url]"

      assert_select "input#venue_birthday_party_phone[name=?]", "venue[birthday_party_phone]"
    end
  end
end
