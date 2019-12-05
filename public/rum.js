console.log("RUM")
const observer = new PerformanceObserver(entryTpes => {
	for (const entry of entryTpes.getEntries()) {
        const time = Math.round(entry.startTime + entry.duration);
        console.log(`${entry.entryType} (${entry.name}): Start ${Math.round(entry.startTime)} + Duration ${Math.round(entry.duration)} = Loadtime ${time}`)
	}
});

// const entryTpes = ['resource', 'paint']
const entryTypes = ['paint']
observer.observe({ entryTypes })
