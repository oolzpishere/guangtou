require "application_system_test_case"

module Frontend
  class AdvantagesTest < ApplicationSystemTestCase
    setup do
      @advantage = frontend_advantages(:one)
    end

    test "visiting the index" do
      visit advantages_url
      assert_selector "h1", text: "Advantages"
    end

    test "creating a Advantage" do
      visit advantages_url
      click_on "New Advantage"

      click_on "Create Advantage"

      assert_text "Advantage was successfully created"
      click_on "Back"
    end

    test "updating a Advantage" do
      visit advantages_url
      click_on "Edit", match: :first

      click_on "Update Advantage"

      assert_text "Advantage was successfully updated"
      click_on "Back"
    end

    test "destroying a Advantage" do
      visit advantages_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Advantage was successfully destroyed"
    end
  end
end
