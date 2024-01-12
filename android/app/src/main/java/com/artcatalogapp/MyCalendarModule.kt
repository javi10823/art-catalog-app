package com.artcatalogapp

import com.facebook.react.bridge.*
import java.util.*
import android.provider.CalendarContract
import android.content.ContentValues

class MyCalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyCalendarModule"
    }

    @ReactMethod
    fun addEvent(title: String, location: String, startDate: Double, endDate: Double, callback: Callback) {
        try {
            val startTime = Date(startDate.toLong())
            val endTime = Date(endDate.toLong())

            val event = ContentValues().apply {
                put(CalendarContract.Events.TITLE, title)
                put(CalendarContract.Events.EVENT_LOCATION, location)
                put(CalendarContract.Events.DTSTART, startTime.time)
                put(CalendarContract.Events.DTEND, endTime.time)
                put(CalendarContract.Events.CALENDAR_ID, 1) // Change this to the desired calendar ID
                put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.getDefault().id)
            }

            val contentResolver = reactApplicationContext.contentResolver
            val uri = contentResolver.insert(CalendarContract.Events.CONTENT_URI, event)

            if (uri != null) {
                callback.invoke(null, uri.toString())
            } else {
                callback.invoke("Error adding event to calendar", null)
            }
        } catch (e: Exception) {
            callback.invoke(e.message, null)
        }
    }
}
