require "test_helper"

module Frontend
  class AdvantagesControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @advantage = frontend_advantages(:one)
    end

    test "should get index" do
      get advantages_url
      assert_response :success
    end

    test "should get new" do
      get new_advantage_url
      assert_response :success
    end

    test "should create advantage" do
      assert_difference('Advantage.count') do
        post advantages_url, params: { advantage: {  } }
      end

      assert_redirected_to advantage_url(Advantage.last)
    end

    test "should show advantage" do
      get advantage_url(@advantage)
      assert_response :success
    end

    test "should get edit" do
      get edit_advantage_url(@advantage)
      assert_response :success
    end

    test "should update advantage" do
      patch advantage_url(@advantage), params: { advantage: {  } }
      assert_redirected_to advantage_url(@advantage)
    end

    test "should destroy advantage" do
      assert_difference('Advantage.count', -1) do
        delete advantage_url(@advantage)
      end

      assert_redirected_to advantages_url
    end
  end
end
