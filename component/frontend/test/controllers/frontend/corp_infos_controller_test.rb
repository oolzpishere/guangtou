require "test_helper"

module Frontend
  class CorpInfosControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @corp_info = frontend_corp_infos(:one)
    end

    test "should get index" do
      get corp_infos_url
      assert_response :success
    end

    test "should get new" do
      get new_corp_info_url
      assert_response :success
    end

    test "should create corp_info" do
      assert_difference('CorpInfo.count') do
        post corp_infos_url, params: { corp_info: {  } }
      end

      assert_redirected_to corp_info_url(CorpInfo.last)
    end

    test "should show corp_info" do
      get corp_info_url(@corp_info)
      assert_response :success
    end

    test "should get edit" do
      get edit_corp_info_url(@corp_info)
      assert_response :success
    end

    test "should update corp_info" do
      patch corp_info_url(@corp_info), params: { corp_info: {  } }
      assert_redirected_to corp_info_url(@corp_info)
    end

    test "should destroy corp_info" do
      assert_difference('CorpInfo.count', -1) do
        delete corp_info_url(@corp_info)
      end

      assert_redirected_to corp_infos_url
    end
  end
end
