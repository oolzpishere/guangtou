require "application_system_test_case"

module Frontend
  class CorpInfosTest < ApplicationSystemTestCase
    setup do
      @corp_info = frontend_corp_infos(:one)
    end

    test "visiting the index" do
      visit corp_infos_url
      assert_selector "h1", text: "Corp Infos"
    end

    test "creating a Corp info" do
      visit corp_infos_url
      click_on "New Corp Info"

      click_on "Create Corp info"

      assert_text "Corp info was successfully created"
      click_on "Back"
    end

    test "updating a Corp info" do
      visit corp_infos_url
      click_on "Edit", match: :first

      click_on "Update Corp info"

      assert_text "Corp info was successfully updated"
      click_on "Back"
    end

    test "destroying a Corp info" do
      visit corp_infos_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Corp info was successfully destroyed"
    end
  end
end
