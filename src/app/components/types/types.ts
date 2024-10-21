// Define types for the marker
export interface Marker {
    color: string;
}

// Define types for each trace (data point)
export interface Trace {
    x: number[];
    y: number[];
    type: string; // e.g., 'scatter', 'bar'
    mode?: string; // Optional property for scatter plots
    marker?: Marker; // Optional property for marker settings
}

// Define types for the layout
export interface Layout {
    width?: number;
    height?: number;
    title: string;
}

// Define the main graph type
export interface Graph {
    data: Trace[];
    layout: Layout;
}
